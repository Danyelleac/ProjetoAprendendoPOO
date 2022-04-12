package br.com.Exercicio1;

public class TestaAnimal {
	
	public static void main(String []args) {
	
	Cachorro cah = new Cachorro();
	Preguiça preg = new Preguiça();
	Cavalo cav = new Cavalo();
	
	cah.setNome("Lola");
	cah.setIdade(10);
	
	preg.setNome("Alan");
	preg.setIdade(5);
	
	cav.setNome("JuJu");
	cav.setIdade(7);
	
	
	System.out.println("\n"+cah.getNome()+" é um cachorra de "+cah.getIdade()+" anos ");
	cah.EmitirSom();
	cah.correr();
	
	System.out.println("\n"+preg.getNome()+" é um cavalo de "+preg.getIdade()+" anos ");
	preg.EmitirSom();
	preg.subirEmArvores();
	
	System.out.println("\n"+cav.getNome()+" é um preguiça de "+cav.getIdade()+" anos ");
	cav.EmitirSom();
	cav.correr();
	
	}

}
