import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Notificador {
    public static void main(String[] args) {
        // Si se pasa un nombre por terminal, lo usa; si no, usa un valor por defecto
        String usuario = (args.length > 0) ? String.join(" ", args) : "Invitado Anonimo";
        String sistema = "ECHO-Sync Core";
        
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        String fecha = dtf.format(LocalDateTime.now());

        System.out.println("========================================");
        System.out.println("       " + sistema + " SECURITY LOG     ");
        System.out.println("========================================");
        System.out.println("EVENTO: Validando nuevo registro...");
        System.out.println("USUARIO DETECTADO: " + usuario);
        System.out.println("FECHA/HORA: " + fecha);
        System.out.println("----------------------------------------");
        System.out.println("JAVA: Cifrando datos de usuario...");
        System.out.println("JAVA: Registro de '" + usuario + "' completado exitosamente.");
        System.out.println("========================================");
    }
}