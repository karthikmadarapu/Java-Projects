import java.util.Scanner;

public class ProCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
     MathEngine engine = new MathEngine(); // Creating an Object for the Engine class
        boolean running  = true;
        System.out.println("Pro Calculator Started!!! ");

        while(running) {
            System.out.println("Enter your First Number: (or 000 to exit the application)");
            double num1 = scanner.nextDouble();
            if (num1 == 000) {
                running = false;
                continue;
            }
            System.out.println("Operator: (+,-,*,/)");
            char op  = scanner.next().charAt(0);

            System.out.println("Enter your Second Number: ");
            double num2 = scanner.nextDouble();

            double result = 0;
            switch (op) {
                case '+': result = engine.add(num1, num2); break;
                case '-': result = engine.sub(num1, num2); break;
                case '*': result = engine.multi(num1, num2); break;
                case '/': result = engine.div(num1, num2); break;
            }
            System.out.println("Result: " + result);
        }
        System.out.println("Program Ended!!! ");

    }

}
