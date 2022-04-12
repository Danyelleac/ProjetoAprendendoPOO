package br.com.Exercicio2;

public class Cavalo extends Animal {
	
	public String getNome() {
		return "O Cavalo chama "+super.getNome()+" e tem "+super.getIdade()+" anos,ele faz "+super.getEmitirsom()+ " e esta "+super.getFazerAlgo();
	}
	
	

}
