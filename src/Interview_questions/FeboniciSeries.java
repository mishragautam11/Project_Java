package Interview_questions;

public class FeboniciSeries {
    public static void main(String[] args) {
        System.out.println("The nth value is"+" "+"= "+fib(11));
    }

    public static int fib(int n) {

        if (n <= 1)
        return n;
        else return fib(n-1)+fib(n-2);

    }
}