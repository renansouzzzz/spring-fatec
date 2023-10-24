package br.com.springfatec.springfatec.controller;

import br.com.springfatec.springfatec.models.User;
import br.com.springfatec.springfatec.repository.UserRepository;
import br.com.springfatec.springfatec.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService service;

    @PostMapping
    public ResponseEntity<User> post(@RequestBody User user) {

        return ResponseEntity.accepted().body(service.create(user));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> put(@PathVariable Long id, @RequestBody User user) {

        return ResponseEntity.accepted().body(service.update(user, id));
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll() {

        return ResponseEntity.ok().body(service.getAll());
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {

        return ResponseEntity.ok().body(service.getById(id));
    }

    @PutMapping("/delete/{id}")
    public void deleteByActive(@PathVariable Long id) {

        service.deleteActive(id);
    }
}