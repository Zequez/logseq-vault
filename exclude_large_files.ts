console.log("Excluding large files from Git repo");
Deno.run({ cmd: "find ./assets -type f -size +5MB".split(" ") });
