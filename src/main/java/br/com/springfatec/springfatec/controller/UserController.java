package br.com.springfatec.springfatec.controller;

import br.com.springfatec.springfatec.models.User;
import br.com.springfatec.springfatec.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private final UserService service;

    @PostMapping
    public ResponseEntity<User> post(@RequestBody User user) {

        return ResponseEntity.accepted().body(user);
    }

    @PutMapping
    public ResponseEntity<User> put(@PathVariable UUID id, @RequestBody User user) {

        return ResponseEntity.accepted().body(user);
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll() {

        return ResponseEntity.ok().body(service.getAll());
    }
}