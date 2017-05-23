import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class ArraysLeftRotation {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int k = in.nextInt();
        int rotation = k%n;
        int a[] = new int[n];
        for(int a_i=0; a_i < n; a_i++){
            a[a_i] = in.nextInt();
        }
        
        int rotatedArr[] = Arrays.copyOfRange(a, 0, rotation);
        
        for(int i = rotation ; i < n; i++) {
            System.out.print(a[i] + " ");
        }
        
        for(int i = 0 ; i < rotatedArr.length; i++) {
            System.out.print(rotatedArr[i]+ " ");
        }
    }
}


