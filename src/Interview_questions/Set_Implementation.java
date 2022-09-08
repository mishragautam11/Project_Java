package Interview_questions;// Java program Illustrating Set Interface

// Importing utility classes
import java.util.*;

// Main class
public class Set_Implementation {

    // Main driver method
    public static void main(String[] args)
    {

        Set<String> Set = new HashSet<String>( );

        Set.add("Geeks");
        Set.add("For");
        Set.add("Geeks");
        Set.add("Example");
        Set.add("Set");

        System.out.println(Set);
    }
}
