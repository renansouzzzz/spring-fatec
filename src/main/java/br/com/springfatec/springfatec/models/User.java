package br.com.springfatec.springfatec.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.validation.annotation.Validated;

import java.util.UUID;

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


    @JsonIgnore
    @Column
    @Value("${props.bollean.isActive:#{true}}")
    private boolean active = true;
}