package Revision;

public class ReverseString {
    public static void main(String[] args) {



    String str1 = " reverse";
    String str2 = "";



    for (int i =str1.length()-1;i>1;i--){

        str2= str2+str1.charAt(i);
    }
        System.out.println(str2);
}

}
