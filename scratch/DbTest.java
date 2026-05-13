import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbTest {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/daweb_db";
        String user = "admin";
        String password = "adminpassword";

        System.out.println("Intentando conectar a: " + url);
        try (Connection conn = DriverManager.getConnection(url, user, password)) {
            System.out.println("¡CONEXIÓN EXITOSA!");
        } catch (SQLException e) {
            System.out.println("FALLO EN LA CONEXIÓN:");
            e.printStackTrace();
        }
    }
}
