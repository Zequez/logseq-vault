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
  const notExcludedYet = files.filter((f) => gitignore.indexOf(f) === -1);
  return notExcludedYet;
}

const notExcludedYet = await filesNotAlreadyExcluded();

console.log(notExcludedYet);
