package Re_visosn;

public class Third_largest_number {
    public static void main(String[] args) {

        int[] a = {1,8,9,6,5};

        int max1 = 0;
        int max2 = 0;
        int max3 = 0;

        for (int i=0;i<a.length;i++){

            if (a[i]>=max1){

                max3=max2;
                max2=max1;
                max1=a[i];

            } else if (a[i]>=max2 && a[i]<max1) {
                max3=max2;
                max2=a[i];

            } else if (a[i]>=max3 && a[i]<max2 && a[i]<max1) {
                max3=a[i];

            }
        }
        System.out.println(max3);
    }
}
