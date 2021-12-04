// import path from 'path';
import * as path from 'path';
import { Canvas, createCanvas, loadImage, registerFont } from 'canvas';
import { NextApiRequest, NextApiResponse } from 'next';

const createOgp = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { listId } = req.query;
  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);

  const ctx = canvas.getContext('2d');
  const backgroundImage = await loadImage(path.resolve('./public/ogp.png'));
  ctx.drawImage(backgroundImage, DX, DY, WIDTH, HEIGHT);

  registerFont(path.resolve('./fonts/NotoSansJP-Regular.otf'), {
    family: 'Noto',
  });

  ctx.font = '60px ipagp';
  ctx.fillStyle = '#000000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('入力した文字は' + String(listId), 600, 300);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': buffer.length,
  });
  res.end(buffer, 'binary');
};

export default createOgp;

// interface SeparatedText {
//   line: string;
//   remaining: string;
// }

// const createTextLine = (canvas: Canvas, text: string): SeparatedText => {
//   const context = canvas.getContext('2d');
//   const MAX_WIDTH = 1000 as const;

//   for (let i = 0; i < text.length; i += 1) {
//     const line = text.substring(0, i + 1);

//     if (context.measureText(line).width > MAX_WIDTH) {
//       return {
//         line,
//         remaining: text.substring(i + 1),
//       };
//     }
//   }

//   return {
//     line: text,
//     remaining: '',
//   };
// };

// const createTextLines = (canvas: Canvas, text: string): string[] => {
//   const lines: string[] = [];
//   let currentText = text;

//   while (currentText !== '') {
//     const separatedText = createTextLine(canvas, currentText);
//     lines.push(separatedText.line);
//     currentText = separatedText.remaining;
//   }
//   return lines;
// };

// const createOgp = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
//   // const { dynamic } = req.query;
//   const { uid, listId } = req.query;

//   const WIDTH = 1200 as const;
//   const HEIGHT = 630 as const;
//   const DX = 0 as const;
//   const DY = 0 as const;
//   const canvas = createCanvas(WIDTH, HEIGHT);
//   const ctx = canvas.getContext('2d');

//   registerFont(path.resolve('./fonts/NotoSansJP-Regular.otf'), {
//     family: 'ipagp',
//   });

//   const backgroundImage = await loadImage(path.resolve('./public/ogp.png'));

//   ctx.drawImage(backgroundImage, DX, DY, WIDTH, HEIGHT);
//   ctx.font = '60px ipagp';
//   ctx.textAlign = 'center';
//   ctx.textBaseline = 'middle';

//   const title = String(listId) + 'のリストのOGP';
//   const lines = createTextLines(canvas, title);
//   lines.forEach((line, index) => {
//     const y = 314 + 80 * (index - (lines.length - 1) / 2);
//     ctx.fillText(line, 600, y);
//   });

//   const buffer = canvas.toBuffer();

//   res.writeHead(200, {
//     'Content-Type': 'image/png',
//     'Content-Length': buffer.length,
//   });
//   res.end(buffer, 'binary');
// };
// export default createOgp;
