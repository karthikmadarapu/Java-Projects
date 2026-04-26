import java.sql.SQLOutput;
import java.util.* ;


public class NewMain {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Engine engineObject = new Engine();

        boolean running = true;

        System.out.println("Welcome to the Calculator");

        while (running) {

            System.out.print("Enter your First Number: ");
            double num1 = scanner.nextDouble();

            System.out.println("Operator Pls [+,-,*,/]: ");
            char op = scanner.next().charAt(0);

            System.out.println("Enter your Second Number: ");
            double num2 = scanner.nextDouble();

            double result = 0;
            switch (op) {
                case '+': result = engineObject.add(num1, num2); break;
                case '-': result = engineObject.sub(num1, num2); break;
                case '*': result = engineObject.mul(num1, num2); break;
                case '/': result = engineObject.div(num1, num2); break;
            }
            System.out.println("Result is: " + result);
        }

        System.out.println("Thanks for using my calculator version:");

    }
}
