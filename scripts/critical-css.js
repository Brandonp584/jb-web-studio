import { exec } from "child_process";

exec(
  `npx critical index.html --base=dist/ --width=1300 --height=900 --inline --minify --extract --target=dist/index.html`,
  (err, stdout, stderr) => {
    if (err) {
      console.error(`Critical CSS generation failed: ${err}`);
      return;
    }
    console.log("Critical CSS inlined.");
    if (stdout) console.log(stdout);
    if (stderr) console.error(stderr);
  }
);
