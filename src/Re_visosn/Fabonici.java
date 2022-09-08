package Re_visosn;

public class Fabonici {
    public static void main(String[] args) {
        System.out.println(fib(10));

    }

    public static int fib (int n){

        if (n<=1)
            return n;
        else return fib(n-1)+fib(n-2);

    }




}

