package br.com.springfatec.springfatec.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.validation.annotation.Validated;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Validated
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotBlank(message = "Nome não pode ser nulo!")
    private String name;

    @Column
    @NotBlank(message = "Email não pode ser nulo!")
    private String email;

    @Column
    @NotBlank(message = "Senha não pode ser nulo!")
    private String password;

    @Column
    @NotBlank(message = "Cargo não pode ser nulo!")
    private String jobRole;

    @Column
    @Value("${props.bollean.isActive:#{true}}")
    private boolean active = true;
}