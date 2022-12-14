import { copy } from "https://deno.land/std@0.104.0/io/util.ts";

console.log("Excluding large files from Git repo");

function decode(str: BufferSource) {
  return new TextDecoder().decode(str);
}

async function filesLargerThan5MB() {
  const p = Deno.run({
    cmd: "find ./assets -type f -size +5MB".split(" "),
    stdout: "piped",
    stderr: "piped",
  });

  const files = decode(await p.output())
    .split(/\n/)
    .filter((v) => !!v)
    .map((v) => v.slice(2));

  return files;
}

function linesOnGitignore() {
  return decode(Deno.readFileSync(".gitignore"))
    .split(/\n/)
    .filter((v) => !!v);
}

async function filesNotAlreadyExcluded() {
  const files = await filesLargerThan5MB();
  const gitignore = linesOnGitignore();
  return files;
  const notExcludedYet = files.filter((f) => gitignore.indexOf(f) === -1);
  return notExcludedYet;
}

const notExcludedYet = await filesNotAlreadyExcluded();

// git filter-repo --invert-paths --path 'path/to/file1 path/to/file1'

console.log(notExcludedYet.join(" "));

const filterRepo = Deno.run({
  cmd: [
    "git",
    "filter-repo",
    "--invert-paths",
    "--path",
    `'${notExcludedYet.join(" ")}'`,
  ],
  stdout: "piped",
  stderr: "piped",
});

copy(filterRepo.stdout, Deno.stdout);
copy(filterRepo.stderr, Deno.stderr);

await filterRepo.status();
console.log("Done!");
