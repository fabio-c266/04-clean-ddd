import { Asnwer } from "../entities/answer";

interface AnswerQuestionRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  execute({ instructorId, questionId, content }: AnswerQuestionRequest) {
    const answer = new Asnwer({
      content,
      authorId: instructorId,
      questionId
    });

    return answer;
  }
}