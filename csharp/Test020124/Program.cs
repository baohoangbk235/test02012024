using System;
using System.Collections;
class Student {
    public string Name { get; set; }

    public Score Score { get; set; }
}

public class Score
{
    public int Math { get; set; }

    public int Physic { get; set; }

    public int Chemistry { get; set; }

    public double AverageScore { get; set; }
}

class Program
{
    static void Main()
    {
        Student[] studentsArray = new Student[100];

        InitArray(studentsArray);

        BubbleSort(studentsArray);

        Console.WriteLine("Sorted Array of Students:");
        foreach (var studentFromArray in studentsArray)
        {
            PrintStudentInfo(studentFromArray);
        }

        Console.WriteLine("----------------------------------");

        Student targetStudent = FindStudentWithAverageScore(studentsArray, 8);

        if (targetStudent != null)
        {
            Console.WriteLine("Student with Average Score of 8:");
            PrintStudentInfo(targetStudent);
        }
        else
        {
            Console.WriteLine("No student found with an average score of 8.");
        }
    }

    static void InitArray(Student[] studentsArray){
        Random r = new Random();
        for (int i = 0; i < studentsArray.Length; i++)
        {
            studentsArray[i] = new Student { Name = $"Student {i}"};
            var score = new Score{
                Math = r.Next(0, 10),
                Physic = r.Next(0, 10),
                Chemistry = r.Next(0, 10)
            };

            score.AverageScore = (score.Math + score.Physic + score.Chemistry) / 3.0;
            studentsArray[i].Score = score;
        }
    }

    static void BubbleSort(Student[] students)
    {
        int n = students.Length;

        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                double averageScore1 = students[j].Score.AverageScore;
                double averageScore2 = students[j + 1].Score.AverageScore;

                if (averageScore1 < averageScore2 || (averageScore1 == averageScore2 && string.Compare(students[j].Name, students[j + 1].Name) > 0))
                {
                    Student temp = students[j];
                    students[j] = students[j + 1];
                    students[j + 1] = temp;
                }
            }
        }
    }

    static void PrintStudentInfo(Student student)
    {
        Console.WriteLine($"Student Name: {student.Name}");
        Console.WriteLine($"Math Score: {student.Score.Math}");
        Console.WriteLine($"Physics Score: {student.Score.Physic}");
        Console.WriteLine($"Chemistry Score: {student.Score.Chemistry}");
        Console.WriteLine($"Average Score: {student.Score.AverageScore:F2}\n");
    }

    static Student FindStudentWithAverageScore(Student[] students, double targetAverageScore)
    {
        int low = 0;
        int high = students.Length - 1;

        while (low <= high)
        {
            int mid = (low + high) / 2;
            double midAverageScore = students[mid].Score.AverageScore;

            if (midAverageScore == targetAverageScore)
            {
                return students[mid];
            }
            else if (midAverageScore > targetAverageScore)
            {
                low = mid + 1; 
            }
            else
            {
                high = mid - 1;
            }
        }

        return null;
    }
}

