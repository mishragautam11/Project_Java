package Test;

public class Getuppercase {
    public static void main(String[] args) {

        String str = "autoMATion";
        char[] ch = str.toCharArray();



        for (int i = 0; i < ch.length; i++) {

            if (Character.isUpperCase(ch[i])) {
                System.out.print("The Upper case letter is present below");
                System.out.print(ch[i]);

            }

        }
    }
}
