"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Trophy, RotateCw } from 'lucide-react';
import Link from 'next/link';

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};

const quizzes = [
  {
    id: 'solar-system-basics',
    title: 'Solar System Basics',
    description: 'Test your knowledge about our solar system!',
    difficulty: 'Easy',
    questions: [
      {
        id: 1,
        question: 'Which planet is closest to the Sun?',
        options: ['Venus', 'Mercury', 'Earth', 'Mars'],
        answer: 1
      },
      {
        id: 2,
        question: 'How many planets are in our solar system?',
        options: ['7', '8', '9', '10'],
        answer: 1
      },
      {
        id: 3,
        question: 'Which planet has the Great Red Spot?',
        options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
        answer: 2
      },
      {
        id: 4,
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Jupiter', 'Mars', 'Venus', 'Mercury'],
        answer: 1
      },
      {
        id: 5,
        question: 'Which planet has the most moons?',
        options: ['Earth', 'Mars', 'Saturn', 'Jupiter'],
        answer: 3
      }
    ]
  },
  {
    id: 'planet-explorers',
    title: 'Planet Explorers',
    description: 'Discover exciting facts about different planets!',
    difficulty: 'Medium',
    questions: [
      {
        id: 1,
        question: 'Which planet rotates on its side like a rolling ball?',
        options: ['Neptune', 'Uranus', 'Saturn', 'Jupiter'],
        answer: 1
      },
      {
        id: 2,
        question: 'Which planet has a day longer than its year?',
        options: ['Mars', 'Venus', 'Mercury', 'Pluto'],
        answer: 1
      },
      {
        id: 3,
        question: 'Which planet has a heart-shaped region on its surface?',
        options: ['Mars', 'Venus', 'Pluto', 'Mercury'],
        answer: 2
      },
      {
        id: 4,
        question: 'Which planet would float if placed in water?',
        options: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],
        answer: 0
      },
      {
        id: 5,
        question: 'Which planet has the strongest winds in our solar system?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        answer: 3
      }
    ]
  }
];

export default function QuizzesPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<any>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  
  const handleQuizSelect = (quiz: any) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };
  
  const handleAnswer = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === selectedQuiz.questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };
  
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };
  
  const backToQuizzes = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="min-h-screen w-full py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link href="/">
            <Button variant="ghost" className="group flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-orbitron mb-6 text-center"
        >
          Fun Space Quizzes
        </motion.h1>
        
        {!selectedQuiz ? (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-gray-300 max-w-2xl mx-auto mb-10 font-nunito"
            >
              Test your knowledge about space and planets with these fun quizzes!
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {quizzes.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-card/60 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    <CardHeader>
                      <CardTitle>{quiz.title}</CardTitle>
                      <CardDescription>{quiz.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <p>Difficulty: {quiz.difficulty}</p>
                        <p>Questions: {quiz.questions.length}</p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className="w-full interactive-button"
                        onClick={() => handleQuizSelect(quiz)}
                      >
                        Start Quiz
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl"
            >
              <Card className="bg-card/60 backdrop-blur-md border-white/10">
                <CardHeader>
                  <CardTitle>{selectedQuiz.title}</CardTitle>
                  <CardDescription>
                    {!isFinished ? `Question ${currentQuestion + 1} of ${selectedQuiz.questions.length}` : 'Quiz Complete!'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isFinished ? (
                    <>
                      <h3 className="text-xl font-medium mb-4">
                        {selectedQuiz.questions[currentQuestion].question}
                      </h3>
                      
                      <RadioGroup value={selectedOption?.toString()} onValueChange={(value) => setSelectedOption(parseInt(value))}>
                        {selectedQuiz.questions[currentQuestion].options.map((option: string, index: number) => (
                          <div key={index} className="flex items-center space-x-2 py-2">
                            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`} className="font-nunito cursor-pointer flex-1">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                        <Trophy className="h-8 w-8 text-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">Quiz Completed!</h3>
                      <p className="text-lg mb-2">Your score:</p>
                      <p className="text-3xl font-bold text-primary mb-4">
                        {score} / {selectedQuiz.questions.length}
                      </p>
                      
                      <p className="text-gray-300 mb-6">
                        {score === selectedQuiz.questions.length
                          ? 'Perfect! You're a space expert! 🚀'
                          : score >= selectedQuiz.questions.length / 2
                          ? 'Good job! You know a lot about space! 👍'
                          : 'Keep exploring to learn more about our amazing solar system! 🔭'}
                      </p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex gap-3">
                  {!isFinished ? (
                    <>
                      <Button 
                        variant="outline" 
                        className="bg-white/5 border-white/20 hover:bg-white/10"
                        onClick={backToQuizzes}
                      >
                        Back to Quizzes
                      </Button>
                      <Button 
                        className="flex-1 interactive-button"
                        onClick={handleAnswer}
                        disabled={selectedOption === null}
                      >
                        Next Question
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 bg-white/5 border-white/20 hover:bg-white/10"
                        onClick={resetQuiz}
                      >
                        <RotateCw className="h-4 w-4" />
                        Try Again
                      </Button>
                      <Button 
                        className="flex-1 interactive-button"
                        onClick={backToQuizzes}
                      >
                        Back to Quizzes
                      </Button>
                    </>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}