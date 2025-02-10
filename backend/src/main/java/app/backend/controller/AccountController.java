package app.backend.controller;

import app.backend.entity.Account;
import app.backend.respository.AccountRepository;
import app.backend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AccountController {
    @Autowired
    private AccountService accountService;

    @PostMapping(path = "/login")
    public ResponseEntity<String> login(@RequestBody Account account) {
        Account retrievedAccount = accountService.findByUserName(account.getUsername()).orElse(null);
        if (retrievedAccount == null) {
            return new ResponseEntity<>("User not registered", HttpStatus.NOT_FOUND);
        } else if (retrievedAccount.getPassword().equals(account.getPassword())) {
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid username/password", HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping(path = "/signup")
    public ResponseEntity<String> signup(@RequestBody Account account) {
        if (accountService.findByUserName(account.getUsername()).isPresent()) {
            return new ResponseEntity<>("Username taken", HttpStatus.CONFLICT);
        }
        accountService.registerAccount(account);
        return new ResponseEntity<>("Registration successful", HttpStatus.CREATED);
    }
}
