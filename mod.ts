console.log
(
    await fetch("https://github.com/gnlow-learn/git-protocol.git/info/refs?service=git-upload-pack", {
        headers: {
            "git-protocol": "version=2",
        }
    }).then(res => res.text())
)
console.log("-----");
console.log
(
    await fetch("https://github.com/gnlow-learn/git-protocol.git/info/refs?service=git-upload-pack", {
        method: "post",
        body:
`003cwant 0153b5c45db3b12c1a7608fb7436f18b538c5e3f3fa2 ofs-delta
0009done
0000`,
        headers: {
            "git-protocol": "version=2",
            "wanted-refs": "0153b5c45db3b12c1a7608fb7436f18b538c5e3f3fa2"
        }
    }).then(res => res.headers)
);
console.log("-----");
/*
console.log
(
    await fetch("https://github.com/gnlow-learn/git-protocol.git/info/refs?service=git-receive-pack").then(res => res.text())
)
*/