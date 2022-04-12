package br.com.tstHeranca;

public class TesteHeranca {
	
	public static void main(String[] args) {
		Professor pf = new Professor();
		FuncAdm fa =new FuncAdm();
		
		
		pf.setNome("Jeff");
		pf.setIdade(25);
		pf.setEndereco("Rua das Flores");
		pf.setSalario(1000);
		pf.setDisciplina("Java");
		
		System.out.println("O professor "+pf.getNome()+" de "+pf.getIdade()+" que mora na "+pf.getEndereco()
		+" e da aula de "+pf.getDisciplina()+" e ganha R$"+pf.getSalario()+" é muito legal !");
		
		
		fa.setNome("Esmeralda");
		fa.setIdade(20);
		fa.setEndereco("Rua sul");
		fa.setSalario(15000);
		fa.setFuncao("Dev Java");
		fa.setSetor("TI");
		
		System.out.println("A funcionaria "+fa.getNome()+" de "+fa.getIdade()+" que mora na "+fa.getEndereco()
		+" que é "+fa.getFuncao()+" na área de "+fa.getSetor()+" e ganha R$"+fa.getSalario()+" é muito legal !");
	}

}
