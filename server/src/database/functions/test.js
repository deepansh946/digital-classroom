import mongoose from "mongoose";

import Test from "../models/Test";

export async function create({ question, authorId, answers }) {
  try {
    const test = new Test({
      question: text,
      authorId: authorId,
      answers: answers
    });

    const { newTest } = await test.save();

    return {
      statusCode: 201,
      message: "Test created",
      payload: test._id
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

export async function getAllByAuthorId({ authorId }) {
  try {
    const query = Test.find({ authorId: authorId });

    const tests = await query.exec();

    return {
      statusCode: 200,
      message: "Tests found",
      payload: tests
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

export async function update({ testId, question, answers }) {
  try {
    const query = Test.findById(testId);

    let test = await query.exec();

    if (question) {
      test.question = question;
    }

    const { res } = test.save();

    return {
      statusCode: 200,
      message: "Test updated successfully"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}

export async function Delete({ testId }) {
  try {
    const query = Test.findById(testId);

    const test = await query.exec();

    const res = await test.remove();

    return {
      statusCode: 200,
      message: "Test deleted successfully"
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      error: "Database Server Error"
    };
  }
}
