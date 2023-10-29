/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from 'fs';
import qr from 'qr-image';
import inquirer from 'inquirer';

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            message: 'Enter the data for the qr code',
            name: 'data',
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        var data =answers.data;
        console.log(data);
        generateQrCode(data);
        fs.writeFile("text.txt", data +"\n", (err) => {
            if (err) throw err;
            console.log("The File has been saved");
        });
    });

function generateQrCode(data) {

    var qr_png = qr.image(data, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_png.png'))
}

