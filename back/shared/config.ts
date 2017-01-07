export const port = 8080 //port for server
export const home = process.env.HOME 
export const databaseUrl = "postgres://ryan:1234@localhost:5432/floodfront"
export const databaseName:string  = "floodfront" 
export const databasePort: number = 5432
export const databaseUser: string = "ryan"

export const keyPath: string = "/etc/letsencrypt/live/www.floodfront.com/privkey.pem"
export const certPath: string = "/etc/letsencrypt/live/www.floodfront.com/fullchain.pem"
export const appRoot: string = "/home/ryan/floodfront/front"