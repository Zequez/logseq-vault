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
    .filter((v) => !!v);

  return files;
}

function linesOnGitignore() {
  return decode(Deno.readFileSync(".gitignore"));
}

const files = await filesLargerThan5MB();

console.log(files);
console.log(linesOnGitignore());
