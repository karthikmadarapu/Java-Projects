public class N_file {

    public static int find_n(int [] arr, int num){
       for( int  i: arr){
           if(i==num){
               return i;
           }
       }
       return -1;

    }

    public static void main (String[]args){

        int[] nums = {44,66,88,77,37,12,3, 7, 9, 10, 21, 66, 99};
        int n = 77;

        System.out.println(find_n(nums, n));

        int max = nums[0];
        int min = nums[0];

        for( int curr : nums){
            if(curr > max){
                max = curr;
            }
            else if(curr < min){
                min = curr;
            }

        }
        System.out.println("The max is: " + max);
        System.out.println("The min is: " + min);


    }

}
