import java.util.PriorityQueue;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner in = new Scanner(System.in);
		int n, input;
		PriorityQueue<Integer> pq = new PriorityQueue<>();
		StringBuilder sb = new StringBuilder("");
		n = in.nextInt();
		
		for(int i=0; i<n; i++) {
			input = in.nextInt();
			if(input == 0) {
				if(pq.size() == 0) {
					sb.append(0 + "\n");
				} else {
					sb.append(pq.remove() + "\n");
				}
			} else {
				pq.add(input);
			}
		}
		
		System.out.println(sb.toString());
	}
	
}
