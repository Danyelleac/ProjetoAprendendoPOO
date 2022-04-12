package br.com.Exercicio3;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

public class ApresentaDados {

	public static void main(String[] args) {
		Collection<String> estoque = new ArrayList<String>();
		estoque.add("Camisa Preta");
		estoque.add("Camiseta Azul");
		estoque.add("Saia Rosa");
		estoque.add("Blusa Amarela");
		estoque.add("Saia Verde");
		estoque.add("Blusa Lilas");
		
		Collection<String> estoqueSapatos = Arrays.asList("salto Fino","bota");
		
		
		System.out.println("Primeira Lista: "+estoque);
		
		estoque.remove("Camisa Preta");
		System.out.println("Segunda Lista(com remoção de itens): "+estoque);
		
		System.out.println("Terceira Lista(Consulta Item): Tem Blusa Amarela no estoque? "+estoque.contains("Blusa Amarela"));
		
		estoque.addAll(estoqueSapatos);
		System.out.println("Quarta Lista(adicionando um lista dentro da lista): "+estoque);		
		
		
		estoque.clear();
		System.out.println("Quinta Lista(após excluir todos os itens)"+estoque);


	}

}
