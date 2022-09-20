console.log("Excluding large files from Git repo");
const p = Deno.run({
  cmd: "find ./assets -type f -size +5MB".split(" "),
  stdout: "piped",
  stderr: "piped",
});

console.log(await p.output());
