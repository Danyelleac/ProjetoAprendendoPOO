package br.com.Exercicio2;

public class Cachorro extends Animal {
		
		
	public String getNome() {
		return "O Cachorro chama "+super.getNome()+" e tem "+super.getIdade()+" anos,ele faz "+super.getEmitirsom()+ " e esta "+super.getFazerAlgo();
	}

}
