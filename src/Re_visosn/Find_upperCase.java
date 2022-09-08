package Re_visosn;

public class Find_upperCase {
    public static void main(String[] args) {

        String str = "GautaM";

        char[] chars = str.toCharArray();

        for (Character ch: chars){

            if (Character.isUpperCase(ch)){

                System.out.print(ch);
            }
        }
    }
}
