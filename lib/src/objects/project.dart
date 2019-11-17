import "dart:convert" show json;
import 'dart:html';
import "package:http/http.dart" as http;

class Project {
  final String name;
  final String description;
  final String imageUrl;
  final String codeUrl;
  final String demoUrl;
  final String language;
  final String color;

  bool get hasDemo => demoUrl.isNotEmpty;

  const Project(this.name, this.description, this.imageUrl, this.codeUrl, this.demoUrl, this.language, this.color);

  static Future<Project> github(
    String repoName, 
    {String name, 
    String imageUrl = "", 
    String demoUrl = ""}
  ) async {
    var codeUrl = "https://github.com/periodicaidan/$repoName";
    var githubApiUrl = "https://api.github.com/repos/periodicaidan/$repoName";
    Map<String, dynamic> repo = await http.get(githubApiUrl)
      .then((res) => json.decode(res.body));
    
    name = name ?? repoName;
    String description = repo["description"];
    String language = repo["language"];

    return Project(name, description, imageUrl, codeUrl, demoUrl, language, languageColor[language] ?? "");
  }

  void openSourceCodeInNewTab() {
    window.open(codeUrl, "_blank");
  }
}

const Map<String, String> languageColor = {
  "Rust": "orange",
  "Dart": "teal",
  "Python": "blue",
  "Julia": "violet",
  "C": "grey",
  "C#": "green",
  "CSS": "purple",
  "JavaScript": "yellow",
};