import { Renderer } from '../presentation-layer/artist-render.js';

async function main() {

    var date = moment.locale("mk");
    var renderer = new Renderer();
    await renderer.init("Queen");

}

main();