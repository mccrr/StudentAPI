import { Request, Response, NextFunction } from 'express';
import { students } from '../data/students';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { accessToken } = req.body;

  for (const student in students) {
    if (students.hasOwnProperty(student)) {
      const _student = students[student];

      if (_student.accessToken === accessToken) {
        req.validatedUser = _student;
        return next();
      }
    }
  }

  res.status(403).json({
    success: false,
    message: 'You need to be logged in to see this route.',
  });
};
