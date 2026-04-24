 import java.util.* ;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        double num1 = scanner.nextDouble();

        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);

        System.out.print("Enter the Second Number: ");
        double num2 = scanner.nextDouble();

        double result;
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/':
                if(num2 == 0) {
                    System.out.println("Cannot divide by zero");
                    return;
                }
                result = num1 / num2;
                break;
                default:
                    System.out.println("Invalid input");
                    return;

        }

        System.out.println("The result is: " + result);




    }
}