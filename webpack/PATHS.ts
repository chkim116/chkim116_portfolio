import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

export default {
    app: path.resolve(process.cwd(), 'src'),
    output: path.resolve(process.cwd(), 'build'),
    html: path.resolve(process.cwd(), 'public/index.html'),
    robots: path.resolve(process.cwd(), 'public/robots.txt'),
    publicPath: '/',
};
