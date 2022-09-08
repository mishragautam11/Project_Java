package Practice;

public class Practice8 {
    public static void main(String[] args) {

        String str = "gAuTaM";

        char[] ch = str.toCharArray();

        for (int i= 0; i<ch.length;i++){

            if (Character.isLowerCase(ch[i])){
                System.out.print(ch[i]);
            }


        }

    }
}
