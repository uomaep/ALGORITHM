import java.util.Collections;
import java.util.PriorityQueue;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		int n, input;
		StringBuilder sb = new StringBuilder("");
		PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
		
		n = in.nextInt();
		for(int i=0; i<n; i++) {
			input = in.nextInt();
			if(input == 0) {
				if(pq.size() == 0) sb.append(0+"\n");
				else {
					sb.append(pq.remove()+"\n");
				}
			} else {
				pq.add(input);
			}
		}
		
		System.out.println(sb.toString().trim());
	}
	
}
