import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from 'model';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: getModelToken(User.name),
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
