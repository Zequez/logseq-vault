console.log("Excluding large files from Git repo");

async function filesLargerThan5MB() {
  const p = Deno.run({
    cmd: "find ./assets -type f -size +5MB".split(" "),
    stdout: "piped",
    stderr: "piped",
  });

  const files = new TextDecoder()
    .decode(await p.output())
    .split(/\n/)
    .filter((v) => !!v);

  return files;
}

function linesOnGitignore() {
  console.log(Deno.readFileSync(".gitignore"));
}

const files = filesLargerThan5MB();

console.log(files);
console.log(linesOnGitignore());
