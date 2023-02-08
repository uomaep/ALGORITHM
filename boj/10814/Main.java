import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;

public class Main {

	public static void main(String[] args) throws IOException {
		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder answer = new StringBuilder();
		int N = Integer.parseInt(br.readLine());
		ArrayList<Person> list = new ArrayList<>();

		
		for(int i=0; i<N; i++) {
			String[] p = br.readLine().trim().split(" ");
			list.add(new Person(p[1], Integer.parseInt(p[0]), i));
		}

		Collections.sort(list);
		for(Person p: list) answer.append(p).append("\n");
		System.out.println(answer);

		
	}
	
}

class Person implements Comparable<Person> {

	String name;
	int age, order;
	
	public Person(String name, int age, int order) {
		this.name = name;
		this.age = age;
		this.order = order;
	}
	
	@Override
	public String toString() {
		return String.format("%d %s", age, name);
	}

	@Override
	public int compareTo(Person o) {
		return (this.age != o.age) ? this.age - o.age : this.order - o.order;
	}
		
}
