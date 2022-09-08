package Interview_questions;

public class Plain_Duplicate_String {

    public static void main(String[] args) {

        String str = "gftrrettt";

        char[] ch= str.toCharArray();

        for (int i=0;i<str.length();i++){

            for (int j=i+1;j<str.length();j++){

                if (ch[i] == ch[j]){
                    System.out.println(ch[j]);
                    break;
                }
                }
            }
        }

    }

