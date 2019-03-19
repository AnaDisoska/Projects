function main() {
    var socialNetwork = new SocialNetwork("FaceNoteBook");
    var renderer = new PageRenderer(socialNetwork.user[15]);
    renderer.renderAll();
}
main();