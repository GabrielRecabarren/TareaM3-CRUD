import express, { Express } from 'express';
import databaseConnection from './bootstrap/setupDatabase.bootstrap';
import { config } from './config';

class Application {
    public initialize(): void {
        this.loadConfig();
        databaseConnection();
        const app: Express = express();

    }

    private loadConfig(): void {
        config.validateConfig();
    }
}

const application: Application = new Application();
application.initialize();
