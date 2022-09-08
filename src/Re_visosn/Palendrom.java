package Re_visosn;

public class Palendrom {
    public static void main(String[] args) {

        String str = "noon";
        String str1 = "";

        for (int i = str.length()-1; i>=0;i--){

            str1 = str1+str.charAt(i);
        }
        if (str.equalsIgnoreCase(str1)){

            System.out.println(str+ "-"+"Its a palendrome"+"-"+str1);
        }else System.out.println(str+ "-"+"Its a not palendrome"+"-"+str1);



    }

}
