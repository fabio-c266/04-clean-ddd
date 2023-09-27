import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answerQuestion';

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    content: 'New answer',
    instructorId: '1',
    questionId: '1'
  });

  expect(answer.content).toEqual('New answer');
});