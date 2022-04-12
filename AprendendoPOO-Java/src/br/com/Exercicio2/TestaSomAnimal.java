package br.com.Exercicio2;

public class TestaSomAnimal {
	
	public static void main(String[]args) {
		Cachorro dog= new Cachorro();
		Cavalo horse= new Cavalo();
		Preguica sloth= new Preguica();
		
		dog.setNome("Julio");
		dog.setIdade(18);
		dog.setEmitirsom("Au Au");
		dog.setFazerAlgo("Correndo");
		horse.setNome("Mauricio");
		horse.setIdade(14);
		horse.setEmitirsom("Ihuu");
		horse.setFazerAlgo("Correndo");
		sloth.setNome("JuJuba");
		sloth.setIdade(11);
		sloth.setEmitirsom("Snif Snif");
		sloth.setFazerAlgo("Sobindo em Arvores");
		
		Animal[] cadaAnimal = new Animal[3];
		
		cadaAnimal[0]= dog;
		cadaAnimal[1]=horse;
		cadaAnimal[2]=sloth;
		
		for(Animal animais:cadaAnimal) {
			System.out.println(animais.getNome());
		}
	}

}
